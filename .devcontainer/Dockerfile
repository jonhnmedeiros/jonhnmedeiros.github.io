FROM mcr.microsoft.com/devcontainers/typescript-node:22-bookworm

# Install additional tools if needed
RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspace
