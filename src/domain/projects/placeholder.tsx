import { PLACEHOLDER_URL } from '@/shared/constants';

import type { Project } from './schemas';

export const placeholder: Project = {
  title: 'Project Title Placeholder',
  slug: 'placeholder-project',
  dates: {
    from: new Date('2023-01'),
    to: new Date('2023-12'),
  },
  image: PLACEHOLDER_URL,
  tags: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
  description:
    'A brief description of the project goes here. This project demonstrates key features like scalability, security, and modern development practices. Built with a flexible stack and designed for seamless integration into various workflows.',
  content: (
    <>
      This is a placeholder project description outlining the core features and
      functionality. The project showcases various aspects of development,
      including API integrations, user management, and deployment strategies.
      Key highlights include:
      <br />
      <br />
      • Feature one: core functionality with robust design.
      <br />
      • Feature two: scalable architecture for modern applications.
      <br />
      • Feature three: secure user authentication and authorization mechanisms.
      <br />
      • Feature four: detailed logging and monitoring capabilities.
      <br />
      • Feature five: containerized environment for consistent development.
      <br />
      • Feature six: comprehensive input validation and error handling.
      <br />
      • Feature seven: API documentation for seamless integration.
      <br />
      • Feature eight: multi-environment support for development and production.
      <br />
      • Feature nine: modular and extensible codebase for future enhancements.
      <br />• Feature ten: administrative tools for managing users and settings.
    </>
  ),
  isPrivate: false,
};
