# Contributing to UmbraBet Platform

Thank you for your interest in contributing to UmbraBet Platform! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Submit a pull request

## Development Guidelines

### Code Style
- Follow the existing code style
- Use TypeScript for all new code
- Run `npm run format` before committing
- Run `npm run lint` to check for issues

### Commit Messages
- Use conventional commits: `type(scope): description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
- Example: `feat(auth): add JWT token refresh`

### Pull Requests
- Keep PRs focused and reasonably sized
- Write clear descriptions of changes
- Link related issues
- Ensure CI passes
- Request review from maintainers

### Testing
- Write tests for new features
- Ensure all tests pass: `npm run test`
- Aim for >80% code coverage

### Documentation
- Update README if needed
- Add JSDoc comments for functions
- Document complex logic

## Monorepo Structure

When adding features:
- **Shared code** → `packages/shared`
- **UI components** → `packages/ui`
- **App-specific code** → respective `apps/` directory
- **Configuration** → `packages/config`

## Development Workflow

1. Start development servers: `npm run dev`
2. Make changes in your editor
3. Run linter: `npm run lint`
4. Run tests: `npm run test`
5. Check types: `npm run type-check`
6. Format code: `npm run format`
7. Commit and push

## Reporting Issues

- Check if the issue already exists
- Provide detailed description
- Include steps to reproduce
- Attach relevant logs or screenshots
- Specify your environment (OS, Node version, etc.)

## Questions?

Feel free to ask questions in issues or contact the maintainers.
