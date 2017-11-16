# Curious Media ESLint config #
Shared ESLint config used for JavaScript in projects at Curious Media.

## Automatic Install ##
If `.estlintrc.*` does not exist in your project root and `eslintConfig` key does not exist in `package.json`, on install module will prompt to copy it to project root.

## Manual Install ##
ESLint configuration can be added as a file in the project root or as a object in project package.

### .eslintrc ###
```json
{
	"extends": "@curiousmedia/eslint-config-curiousmedia"
}
```

### package.json ###
```json
{
	"eslintConfig": {
		"extends": "@curiousmedia/eslint-config-curiousmedia"
	}
}
```