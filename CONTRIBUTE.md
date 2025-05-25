# Contribution Guide for Number to Nepali Word System

Thank you for considering contributing to this project! Here's how you can contribute effectively.

## Prerequisites

- GitHub account
- Git installed locally
- Basic Git knowledge

## Getting Started

### 1. Fork the Repository
- Visit [the repository](https://github.com/TilakKhatri/number-to-Nepali-word-system)
- Click "Fork" button (top-right)
- This creates your personal copy

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR-USERNAME/number-to-Nepali-word-system.git
cd number-to-Nepali-word-system
```

## Making Changes
### 1. Create  a Branch
```bash
git checkout -b type/description
```
Branch naming examples:
* feature/add-decimal-support
* fix/issue-42-conversion-error
* docs/update-readme

### 2. Make Your Changes
* Follow existing code style
* Add tests if applicable
* Update documentation

### 3. Commit Changes
```bash
git add .
git commit -m "Concisely describe changes"
```

Good commit messages:
* Start with verb (Add, Fix, Update, etc.)
* Keep first line under 50 chars
* Add details in body if needed

### 4. Sync with Upstream
```bash
git fetch upstream
git rebase upstream/main
```
### 5. Push Changes
```bash
git push origin your-branch-name
```
# Creating a Pull Request
1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill in PR template:
  * Description of changes
  * Related issues
  * Screenshots (if applicable)
4. Click "Create pull request"
