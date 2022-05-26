class Creator {
  constructor() {
    this.featurePrompts = []
    this.injectPrompts = []
  }

  injectFeaturePrompt(featurePrompts) {
    this.featurePrompts = [...this.featurePrompts, ...featurePrompts]
  }

  getFinallyPrompts() {
    this.injectPrompts.forEach(prompt => {
      const originWhen = prompt.when || (() => true)
      prompt.when = answers => originWhen(answers)
    })

    return [...this.featurePrompts, ...this.injectPrompts]
  }

}

module.exports = Creator