
dev:
	@chrome http://localhost:3003
	@node server.js

doc:
	@ghp-import

.PHONY: dev
