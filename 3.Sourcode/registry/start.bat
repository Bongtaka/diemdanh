@echo off
docker-compose -f jhipster-registry.yml up -d
docker-compose -f jhipster-registry.yml logs jhipster-registry
