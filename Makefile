install:
	npm ci
gendiff:
	node gendiff -h
lint:
		npx eslint . 
lint-fix:
	npx eslint . --fix
test: 
	npm test
test-coverage: 
	npx jest --coverage

