import { PLACEHOLDER_URL } from '@/shared/constants';

import type { Project } from './schemas';

export const banking: Project = {
  title: 'Bank Card Management API',
  slug: 'banking',
  dates: {
    from: new Date('2024-06'),
    to: new Date('2025-01'),
  },
  tags: ['PHP', 'Laravel', 'Docker', 'MySQL'],
  image: PLACEHOLDER_URL,
  description:
    'A secure, multi-tenant B2B API for managing bank cards and financial transactions. Features include role-based authentication, granular permission controls, transaction logging, and full organization management. Built with Laravel and Docker, designed for scalability and easy integration.',
  content: (
    <>
      A RESTful API for managing bank cards, including CRUD operations for card
      details, transactions, and user authentication. Built with Laravel and
      MySQL, the project includes role-based access control, Dockerized
      development environment, and integration-ready endpoints. Designed with
      scalability and security in mind to support modern banking use cases. Key
      features include:
      <br />
      <br />
      • Secure user registration and login with JWT authentication.
      <br />
      • Endpoints for creating, updating, deleting, and retrieving bank cards.
      <br />
      • Transaction logging with filtering and sorting capabilities.
      <br />
      • User roles (admin, user) with specific access permissions.
      <br />
      • Docker support for consistent development and deployment environments.
      <br />
      • Input validation and error handling for all operations.
      <br />
      • API documentation using Swagger for ease of integration.
      <br />
      • Multi-tenant architecture enabling organizations to manage their own
      isolated data environments.
      <br />
      • Tenant-aware routing and scoped authentication layers to separate access
      at the organizational level.
      <br />
      • Advanced permission system allowing granular access control within
      tenant workspaces.
      <br />• Organization and user management endpoints for full B2B
      administrative capabilities.
    </>
  ),
  isPrivate: true,
};
