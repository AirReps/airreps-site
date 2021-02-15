> **If you need to modifying content (ex. the "guides"), then you're in the wrong repository!**

> This repository only handles the 'logic' of our site.

# Cloning this repository

> `git clone https://github.com/AirReps/airreps-site.git --recursive`

The submodles should be cloned out of the box, but if that didn't happen add the `--recursive` flag to your cloning statement.

# Local Development
1. After cloning the repository, install project dependencies:
    ```console
    yarn install
    --or--
    npm install
    ```
1. Make sure your `docs` submodule is up to date.
    ```console
    cd docs/ && git pull origin master && cd ../..
     ```
1. Spin-up your local dev server.
    ```console
    yarn start
    --or--
    npm run start
    ```

## Build & Deploy

> Build and deployments are handled automatically by our pipeline when a PR is completed on `website-content`. However, you can trigger a build/deployment cycle manually if desired.

### Run a manual build/deployment 
You can run a build/deployment cycle with Github Actions in the `website-content` repository.
1. [Navigate to the website-content repository and click "Actions"](https://github.com/AirReps/website-content/actions?query=workflow%3A%22Publish+Documentation%22)
1. Click `Run Workflow` and make sure `Use workflow from: "Branch: master"` is selected.
1. Click the green `Run Workflow` button.
