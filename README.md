Example project for this [pull request](https://github.com/istanbuljs/istanbul-api/pull/5) - Istanbul: Capture source maps when creating reports, if the --compilers option is specified.

## Install

```bash
git clone git@github.com:rundef/typescript-istanbul-report.git
cd typescript-istanbul-report
npm i
```

## Generate the coverage report

```bash
npm run cover
```

The report will be located in *./coverage/unit*

## Generate the final report

```bash
npm run report
```

The report will be located in *./coverage/final*

This is the incorrect report !