const NOTIFICATION_EMAIL = 'gowda9663051609@gmail.com';
const SHEET_HEADERS = [
  'Submitted At',
  'Name',
  'Email',
  'Phone',
  'Best Time To Talk',
  'Message',
  'Source',
  'Full Submission Data',
];

function doPost(e) {
  try {
    const data = getSubmittedData(e);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    ensureSheetHeaders(sheet);

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.phone || data.mobile || '',
      data.bestTimeToTalk || data.selectedTime || '',
      data.message || data.additionalInfo || '',
      data.source || '',
      JSON.stringify(data),
    ]);

    const name = data.name || 'N/A';
    const email = data.email || 'N/A';
    const phone = data.phone || data.mobile || 'N/A';
    const bestTimeToTalk = data.bestTimeToTalk || data.selectedTime || 'N/A';
    const message = data.message || data.additionalInfo || 'N/A';
    const source = data.source || 'N/A';

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: "New Gruham's Construction enquiry",
      body: buildPlainText(name, email, phone, bestTimeToTalk, message, source),
      htmlBody: buildEmailHtml(name, email, phone, bestTimeToTalk, message, source),
    });

    return jsonResponse({ success: true, message: 'Submitted successfully' });
  } catch (error) {
    return jsonResponse({ success: false, error: error.message });
  }
}

function getSubmittedData(e) {
  if (e && e.parameter && e.parameter.data) {
    return JSON.parse(e.parameter.data);
  }

  if (e && e.postData && e.postData.contents) {
    return JSON.parse(e.postData.contents);
  }

  throw new Error('No data received');
}

function ensureSheetHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, SHEET_HEADERS.length).setValues([SHEET_HEADERS]);
  } else {
    const firstRow = sheet.getRange(1, 1, 1, SHEET_HEADERS.length).getValues()[0];
    const hasHeaders = SHEET_HEADERS.every((header, index) => firstRow[index] === header);

    if (!hasHeaders) {
      sheet.insertRowBefore(1);
      sheet.getRange(1, 1, 1, SHEET_HEADERS.length).setValues([SHEET_HEADERS]);
    }
  }

  const headerRange = sheet.getRange(1, 1, 1, SHEET_HEADERS.length);
  headerRange
    .setFontWeight('bold')
    .setFontColor('#ffffff')
    .setBackground('#102d3b')
    .setHorizontalAlignment('center');

  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, SHEET_HEADERS.length);
}

function buildEmailHtml(name, email, phone, bestTimeToTalk, message, source) {
  const submittedAt = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return `
  <div style="margin:0;background:#f3f5f7;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#1d2730;">
    <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e1e6e9;border-radius:14px;overflow:hidden;box-shadow:0 8px 28px rgba(25,38,48,.08);">
      <div style="background:#102d3b;padding:28px 32px;">
        <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#d8b56d;font-weight:bold;">GRUHAM'S CONSTRUCTION</div>
        <h1 style="margin:12px 0 4px;color:#ffffff;font-size:26px;line-height:1.25;font-weight:700;">New enquiry received</h1>
        <p style="margin:0;color:#c9d7dc;font-size:14px;">A new enquiry has arrived from your website.</p>
      </div>

      <div style="padding:28px 32px;">
        <div style="background:#f8f3e8;border-left:4px solid #c59a4a;border-radius:6px;padding:16px 18px;margin-bottom:24px;">
          <div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#856526;font-weight:bold;">Contact</div>
          <div style="margin-top:7px;font-size:21px;font-weight:700;color:#102d3b;">${escapeHtml(name)}</div>
          <div style="margin-top:5px;font-size:14px;color:#53616a;">Received ${escapeHtml(submittedAt)}</div>
        </div>

        <table role="presentation" style="width:100%;border-collapse:collapse;font-size:15px;">
          ${emailRow('Email', `<a href="mailto:${escapeHtml(email)}" style="color:#1b6d8a;text-decoration:none;">${escapeHtml(email)}</a>`)}
          ${emailRow('Phone', escapeHtml(phone))}
          ${emailRow('Best time to talk', escapeHtml(bestTimeToTalk))}
          ${emailRow('Source', escapeHtml(source))}
        </table>

        <div style="margin-top:24px;padding-top:22px;border-top:1px solid #e6eaec;">
          <div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#687780;font-weight:bold;">Message</div>
          <div style="margin-top:10px;background:#f7f9fa;border-radius:8px;padding:15px 16px;color:#35434b;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</div>
        </div>

        <a href="mailto:${escapeHtml(email)}" style="display:inline-block;margin-top:26px;background:#c59a4a;color:#ffffff;text-decoration:none;border-radius:6px;padding:13px 20px;font-size:14px;font-weight:bold;">Reply to ${escapeHtml(name)}</a>
      </div>

      <div style="background:#f7f9fa;border-top:1px solid #e6eaec;padding:18px 32px;color:#78858c;font-size:12px;line-height:1.5;">
        This enquiry was submitted through the Gruham's Construction website.
      </div>
    </div>
  </div>`;
}

function emailRow(label, value) {
  return `<tr><td style="width:38%;padding:11px 0;border-bottom:1px solid #edf0f1;color:#718087;font-size:13px;">${label}</td><td style="padding:11px 0;border-bottom:1px solid #edf0f1;color:#1d2730;font-weight:600;">${value}</td></tr>`;
}

function buildPlainText(name, email, phone, bestTimeToTalk, message, source) {
  return [
    "New Gruham's Construction enquiry",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Best Time: ${bestTimeToTalk}`,
    `Message: ${message}`,
    `Source: ${source}`,
  ].join('\n');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
