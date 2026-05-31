"use client";

import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";

const education = {
  title: "B.Tech — Computer Science",
  institution: "Galgotias University",
  period: "2024 – 2028",
  points: [
    "Pursuing a Bachelor's degree in Computer Science Engineering.",
    "Learning data structures, algorithms, OS, DBMS, and computer networks.",
    "Building personal projects to apply what I learn in the real world.",
    "Exploring full-stack web development with modern tools and frameworks.",
  ],
};

const ExperienceSection = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center min-h-[60vh] py-20 z-10">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Education"
          desc="Where I'm learning to build the future."
          className="mb-12 md:mb-20 mt-0"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Card className={cn(
            "bg-card text-card-foreground border-border",
            "hover:border-primary/20 transition-colors duration-300",
            "shadow-sm hover:shadow-md"
          )}>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-bold tracking-tight">
                    {education.title}
                  </CardTitle>
                  <div className="text-base font-medium text-muted-foreground">
                    {education.institution}
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
                  {education.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
                {education.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
