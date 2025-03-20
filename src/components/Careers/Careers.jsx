import React from "react";
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import careersBg from "../../assets/images/careers_bg.jpg";

const openPositions = [
    "Estimator",
    "Construction Technology Engineer",
    "Project Manager - Seattle, WA",
    "Site Superintendent - Washington, DC",
    "Senior Safety Engineer - Los Angeles, CA",
];

const Career = () => {
      const theme = useTheme();
    
      const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <Box sx={{ margin: "auto", padding: "2rem" }}>
            {/* Header Section */}
            <Typography variant="h4" fontWeight={600} textAlign="center" gutterBottom>
                Want to be Part of the Team?
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ marginBottom: "2rem" }}>
                We are an Employee-Owned company looking for talented individuals to join our team.
            </Typography>

            {/* Banner Section */}
            <Box
                sx={{
                    backgroundImage: `url(${careersBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: isMobile ? "300px" : "500px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    color: "white",
                }}
            >
                <Typography variant="h5" fontWeight={600} sx={{ background: "rgba(0, 0, 0, 0.6)", padding: "1rem" }}>
                    Our Core Purpose is to create and build community through teamwork, leadership, and experience.
                </Typography>
            </Box>

            {/* Open Positions Section */}
            <Box sx={{ marginTop: "3rem" }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Current Open Positions
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Card variant="outlined">
                            <CardContent>
                                <List>
                                    {openPositions.map((position, index) => (
                                        <ListItem key={index} divider>
                                            <ListItemText primary={position} />
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Career;