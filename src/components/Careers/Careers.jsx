import React from "react";
import { Container, Typography, Box, Grid, Card, CardContent, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideUp, FadeIn } from "../../animation/animate";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";

import "./Careers.css";

const jobVacancies = [
    {
        title: "Senior Project Manager",
        type: "Full-Time",
        location: "Bangalore",
        experience: "8-12 Years",
        responsibilities: [
            "Lead complex, large-scale construction projects from conception to completion.",
            "Oversee multiple sites simultaneously and manage multi-million rupee budgets.",
            "Develop comprehensive project schedules and ensure complete compliance with safety and building regulations.",
            "Mentor junior managers and serve as the primary liaison between clients, architects, and subcontractors."
        ]
    },
    {
        title: "Project Manager",
        type: "Full-Time",
        location: "Bangalore",
        experience: "5-8 Years",
        responsibilities: [
            "Oversee the planning, implementation, and tracking of specific construction projects.",
            "Conduct daily site monitoring, resource allocation, and risk management.",
            "Ensure projects are completed within the designated timeline and budget.",
            "Directly manage site engineers and contractors to maintain high standards of quality."
        ]
    },
    {
        title: "Senior Architect",
        type: "Full-Time",
        location: "Bangalore",
        experience: "7-10 Years",
        responsibilities: [
            "Drive the architectural vision for premium residential and commercial projects.",
            "Conceptualize innovative designs, create detailed blueprints, and work closely with structural engineers.",
            "Integrate sustainable and eco-friendly design principles into projects.",
            "Lead client presentations, material selection, and secure necessary municipal approvals."
        ]
    },
    {
        title: "Architect",
        type: "Full-Time",
        location: "Bangalore",
        experience: "3-5 Years",
        responsibilities: [
            "Create imaginative and practical designs for various residential and commercial projects.",
            "Assist in drafting plans and creating 3D renderings using AutoCAD, SketchUp, and Revit.",
            "Prepare project specifications and material requirements.",
            "Conduct regular site visits to ensure construction aligns precisely with the design intent."
        ]
    },
    {
        title: "Senior Site Engineer",
        type: "Full-Time",
        location: "Bangalore",
        experience: "6-9 Years",
        responsibilities: [
            "Take charge of major construction sites, ensuring total safety and quality control.",
            "Ensure strict adherence to structural design specifications and architectural plans.",
            "Manage material procurement, resolve technical issues on-site, and conduct rigorous quality checks.",
            "Mentor junior engineers, lead site meetings, and coordinate with the project management team."
        ]
    },
    {
        title: "Site Engineer",
        type: "Full-Time",
        location: "Bangalore",
        experience: "2-4 Years",
        responsibilities: [
            "Manage day-to-day construction activities and directly supervise the labor force.",
            "Interpret engineering drawings, set out sites, and take precise measurements.",
            "Organize materials and equipment efficiently on-site.",
            "Serve as the crucial link between the design team and the construction workers."
        ]
    }
];

const Careers = () => {
    return (
        <div className="careers-page-section">
            <SEOHead
                title="Careers - Gruham's Construction - Join Our Team in Bangalore"
                description="Looking for a career in construction? Gruham's Construction is hiring Site Engineers, Project Managers, and Architects in Bangalore. Join our growing team today."
                keywords="Gruham construction careers, construction jobs Bangalore, site engineer jobs, project manager jobs, architect jobs, hiring construction Bangalore"
                canonical="/careers"
            />

            {/* Header Section */}
            <Box className="careers-header">
                <Container maxWidth="lg">
                    <motion.div variants={FadeIn} initial="hidden" animate="visible">
                        <Typography variant="h2" className="careers-title">
                            Join Our <span>Team</span>
                        </Typography>
                        <div className="header-divider-careers"></div>
                        <Typography variant="body1" className="careers-subtitle" align="center" sx={{ mt: 3, mx: "auto", display: "block" }}>
                            Build your path with Bangalore's leading construction firm. Discover opportunities, shape skyline's, and construct a legacy with Gruhams.
                        </Typography>
                    </motion.div>
                </Container>
            </Box>
            {/* Jobs Section */}
            <div className="jobs-section">
                <div className="jobs-grid">
                    {jobVacancies.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ height: '100%' }}
                        >
                            <div className="job-item">
                                <div className="job-line" />
                                <div className="job-title-container">
                                    <h3 className="job-title">{job.title}</h3>
                                </div>

                                <div className="job-badges">
                                    <span className="job-badge type">{job.type}</span>
                                    <span className="job-badge location">{job.location}</span>
                                    <span className="job-badge experience">Exp: {job.experience}</span>
                                </div>

                                <div className="job-roles-section">
                                    <h4 className="job-roles-title">Roles & Responsibilities:</h4>
                                    <ul className="job-roles-list">
                                        {job.responsibilities.map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="job-action">
                                    <Button
                                        component={RouterLink}
                                        to="/contact"
                                        variant="contained"
                                        className="apply-btn"
                                        sx={{
                                            background: "linear-gradient(90deg, #bfa974 0%, #f6e8b8 100%)",
                                            color: "#332900 !important",
                                            fontWeight: 600,
                                            px: 5,
                                            py: 1.5,
                                            borderRadius: "10px",
                                            "&:hover": { background: "#b1936b", color: "#fff !important" }
                                        }}
                                    >
                                        Apply Now
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* General Application Section */}
            <div className="general-application-section">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="general-app-content"
                >
                    <h3 className="general-app-title">Don't see a role that fits?</h3>
                    <p className="general-app-text">
                        We are always on the lookout for talented, passionate individuals who share our vision. Send us your resume, and we'll keep you in mind for future openings.
                    </p>
                    <Button
                        component={RouterLink}
                        to="/contact"
                        variant="contained"
                        className="general-apply-btn"
                        sx={{
                            background: "linear-gradient(90deg, #bfa974 0%, #f6e8b8 100%)",
                            color: "#332900 !important",
                            fontWeight: 600,
                            px: 5,
                            py: 1.5,
                            borderRadius: "10px",
                            border: "none !important",
                            "&:hover": { background: "#b1936b", color: "#fff !important", border: "none !important" }
                        }}
                    >
                        Submit Resume
                    </Button>
                </motion.div>
            </div>

            {/* Internal Links */}
            <div style={{ padding: "40px 5%", backgroundColor: "#ffffff" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <InternalLinks currentPage="careers" />
                </div>
            </div>
        </div>
    );
};

export default Careers;
