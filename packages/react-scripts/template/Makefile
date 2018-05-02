BERLIOZ_GROUP     := udacity
# Add the Berlioz name for your app here
BERLIOZ_NAME      := berlioz_name_here
DOCKER_REPO       := $(BERLIOZ_GROUP)/$(BERLIOZ_NAME)
SERVICE_NAME      := $(BERLIOZ_NAME)
VERSION           ?= $(shell git rev-parse --short HEAD)
# Add the Conductor App Id here
CONDUCTOR_APP_ID  := conductor_app_id_here
export

.PHONY: all deploy docker deploy-staging deploy-preview

all: docker

docker:
	docker build -t $(SERVICE_NAME) .
	docker tag $(SERVICE_NAME) $(DOCKER_REPO):$(VERSION)
	docker push $(DOCKER_REPO)

_deploy:
	@curl --fail -X PUT "https://conductor-beta.udacity.com/api/v1/apps/$(CONDUCTOR_APP_ID)/deploy" \
		-H 'X-GitHub-Access-Token: $(CI_GITHUB_ACCESS_TOKEN)' \
		-d '{"environment": "$(ENVIRONMENT)", "image": "$(DOCKER_REPO):$(VERSION)"}'

deploy: ENVIRONMENT=production
deploy: docker
deploy: _deploy

deploy-staging: ENVIRONMENT=staging
deploy-staging: docker
deploy-staging: _deploy

deploy-preview: ENVIRONMENT=preview
deploy-preview: docker
deploy-preview: _deploy