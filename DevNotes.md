# Dev notes

## Local dev

change package versions to workspace:[version] eg:

`"workspace:0.4.7" `

For now - use demo site as development testing/showing

For install

`pnpm i`

Remember to build, before demo project can run, and everytime new changes are made.

`pnpm -r build`

For demo project

`pnpm run dev`

# Build and deploy order

- Utils
- Core
- Extra
- DKFDS-Vue3

Remember to change workspace version to correct version for each package

`"workspace:0.4.7" `

to

`"0.4.7"`

and push branch (otherwise publish wont see versions).

## Publish

For each folder :

- Utils
- Core
- Extra
- DKFDS-Vue3 (dont have build)

`pnpm run build`

`pnpm publish`

## Demo project

Deploye with:

`pnpm run buildpages`
