# Contributing to VendorConnect

Thank you for your interest in contributing to VendorConnect! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues
- Use the GitHub issue tracker to report bugs
- Include detailed steps to reproduce the issue
- Provide screenshots or videos when helpful
- Specify your browser and operating system

### Suggesting Features
- Open an issue with the "feature request" label
- Describe the feature and its benefits
- Include mockups or examples if possible
- Explain how it helps street food vendors

### Code Contributions

#### Getting Started
1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature
4. Make your changes
5. Test thoroughly
6. Submit a pull request

#### Development Setup
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/vendorconnect-platform.git
cd vendorconnect-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

#### Code Style Guidelines
- Use TypeScript for all new code
- Follow existing naming conventions
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add comments for complex logic

#### Component Guidelines
- Keep components focused and reusable
- Use proper TypeScript interfaces
- Include error handling
- Make components accessible
- Test on mobile devices

#### Animation Guidelines
- Use hardware-accelerated transforms
- Respect `prefers-reduced-motion`
- Keep animations under 300ms for interactions
- Use easing functions for natural feel
- Test performance on low-end devices

## 🧪 Testing

### Manual Testing
- Test on multiple browsers (Chrome, Firefox, Safari)
- Verify mobile responsiveness
- Check accessibility with screen readers
- Test offline functionality
- Validate voice search in Hindi

### Performance Testing
- Check Lighthouse scores
- Monitor bundle size
- Test on slow networks
- Verify animation performance

## 📝 Pull Request Process

1. **Update Documentation**: Update README if needed
2. **Add Tests**: Include tests for new features
3. **Check Performance**: Ensure no performance regressions
4. **Review Checklist**: Complete the PR template
5. **Request Review**: Tag relevant maintainers

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested offline functionality
- [ ] Accessibility tested

## Screenshots
Include screenshots of UI changes
```

## 🎯 Priority Areas

We especially welcome contributions in these areas:

### High Priority
- **Mobile Optimization**: Improve mobile user experience
- **Performance**: Optimize loading times and animations
- **Accessibility**: Enhance screen reader support
- **Localization**: Add support for more Indian languages

### Medium Priority
- **Testing**: Add automated tests
- **Documentation**: Improve code documentation
- **UI/UX**: Enhance visual design
- **Features**: Add new vendor tools

### Low Priority
- **Refactoring**: Code cleanup and optimization
- **DevOps**: Improve build process
- **Analytics**: Add usage tracking
- **SEO**: Improve search engine optimization

## 🌍 Localization

### Adding New Languages
1. Create translation files in `src/locales/`
2. Update language selector component
3. Test right-to-left languages if applicable
4. Ensure cultural appropriateness

### Translation Guidelines
- Use simple, clear language
- Consider local business terms
- Test with native speakers
- Maintain consistent tone

## 🔒 Security

### Reporting Security Issues
- Email security@vendorconnect.in
- Do not create public issues for security vulnerabilities
- Include detailed reproduction steps
- Allow time for fixes before disclosure

### Security Guidelines
- Never commit API keys or secrets
- Validate all user inputs
- Use HTTPS for all communications
- Follow OWASP guidelines

## 📞 Getting Help

### Community Support
- GitHub Discussions for questions
- Discord server for real-time chat
- Stack Overflow with `vendorconnect` tag

### Maintainer Contact
- Email: dev@vendorconnect.in
- Twitter: @VendorConnectIn
- LinkedIn: VendorConnect India

## 🏆 Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Invited to contributor events
- Given special Discord roles

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make VendorConnect better for India's street food vendors! 🙏