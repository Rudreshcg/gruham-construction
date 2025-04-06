// Brand Colors
export const brandColors = {
  primary: '#C4A484',
  secondary: '#4a5942',
  text: {
    primary: '#2C2C2C',
    secondary: '#666666',
    light: '#FFFFFF'
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#f8f8f8',
    dark: '#1C1C1E'
  }
};

// Typography
export const typography = {
  fontFamily: {
    heading: "'Playfair Display', serif",
    body: "'Montserrat', sans-serif"
  },
  fontSize: {
    h1: {
      xs: "2.5rem",
      md: "3.5rem"
    },
    h2: {
      xs: "2rem",
      md: "2.5rem"
    },
    h3: {
      xs: "1.75rem",
      md: "2rem"
    },
    h4: {
      xs: "1.5rem",
      md: "1.75rem"
    },
    h5: {
      xs: "1.25rem",
      md: "1.5rem"
    },
    h6: {
      xs: "1rem",
      md: "1.25rem"
    },
    body1: "1rem",
    body2: "0.875rem",
    caption: "0.75rem"
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  letterSpacing: {
    heading: "0.02em",
    body: "0.01em"
  },
  lineHeight: {
    heading: 1.2,
    body: 1.8
  }
};

// Spacing
export const spacing = {
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
  xxl: "4rem"
};

// Shadows
export const shadows = {
  small: "0 2px 8px rgba(0,0,0,0.1)",
  medium: "0 4px 20px rgba(0,0,0,0.1)",
  large: "0 8px 24px rgba(196, 164, 132, 0.2)"
};

// Transitions
export const transitions = {
  default: "0.3s ease-in-out",
  fast: "0.2s ease-in-out",
  slow: "0.5s ease-in-out"
};

// Border Radius
export const borderRadius = {
  small: "4px",
  medium: "8px",
  large: "16px"
};

// Common Styles
export const commonStyles = {
  container: {
    maxWidth: "lg",
    padding: spacing.md
  },
  section: {
    padding: `${spacing.xxl} 0`
  },
  heading: {
    textAlign: "center",
    marginBottom: spacing.md
  },
  subheading: {
    textAlign: "center",
    marginBottom: spacing.xl,
    maxWidth: "800px",
    margin: "0 auto"
  }
}; 