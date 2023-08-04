[![Deploy](https://github.com/cmip6hack/cmip6hack.github.io/actions/workflows/deploy.yaml/badge.svg)](https://github.com/cmip6hack/cmip6hack.github.io/actions/workflows/deploy.yaml)
# CMIP6 Hackathon Main Website

Website: [cmip6hack/cmip6hack.github.io](https://cmip6hack.github.io)


## To build and test locally

Create a conda environment
```bash
conda create -n web-dev -c conda-forge nodejs=12 python=2.7
conda activate web-dev
```

From the root dir of the cmip6hack.github.io repo
```bash
npm run install:clean
```
or
```bash
npm run install
```

Followed by
```bash
npm run dev
```
which enables incremental builds (watches your local source code changes).
