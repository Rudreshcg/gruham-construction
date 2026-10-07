export const getProjectDescription = (project, clientName = project?.name || project?.title || 'Client') => {
  if (project?.content?.description) {
    return project.content.description;
  }

  return `A ${String(project?.category || 'project').toLowerCase()} construction project for ${clientName} in ${project?.location || 'the desired location'}, planned for a ${project?.plotArea || 'specified'} plot. Construction year: ${project?.constructionYear || project?.date || 'N/A'}; current status: ${String(project?.status || 'ongoing').toLowerCase()}.`;
};

export const getProjectSummary = (project) => {
  const clientName = project?.name || project?.title || 'Client';
  return getProjectDescription(project, clientName);
};