class PromptModulesApi {
  constructor(creator) {
    this.creator = creator
  }
  injectFeaturePrompts(featurePrompts) {
    const featurePrompt = this.creator.featurePrompts.find(prompt => prompt.name === 'features')
    featurePrompt && featurePrompt.choices.push(featurePrompts)
  }

  injectPrompts(prompts) {
    this.creator.injectPrompts.push(prompts)
  }
}


module.exports = PromptModulesApi