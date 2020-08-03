# You Speak Yoda backend

Super simple Flask app that receives requests for Yoda translations using the [Fun Translations Yodish API](https://funtranslations.com/api/yoda) 

It's built to provide a backend for the Web UI and demonstrates how to use the [Doppler Universal Secrets Manager](https://doppler.com/) for fetching application configuration and secrets for a Python application.

## Requirments

- Doppler CLI
- Python 3

## Setting up Doppler

1. [Install the Doppler CLI](https://docs.doppler.com/docs/enclave-installation)
1. From a terminal, run:

``` sh
doppler login
```

1. Once logged in, open a new browser window and [sign in to Doppler](https://dashboard.doppler.com/)
1. [Create a project](https://docs.doppler.com/docs/enclave-project-setup) called **yodaspeak-backend**.
1. Copy the contents of `sample.env` to the clipboard
1. Go to `dev`, then click ****Upload JSON/env file**, paste env vars, then click **Upload File**.
1. Open a terminal window and cd into the `backend` directory, then run:
```sh
# 1. Select yodaspeak-backend
# 2. Select dev
doppler enclave setup
```
1. Test that secrets are coming from Doppler by running:
```sh
doppler run -- env | grep FLASK
```

## Setting up the virtual environment

1. Run the following `make` commands to create the virtual environment and install the required dependencies:
```sh
make venv-create
make venv-install
```
