/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/insmv4/templates/actor/parts/characteristics-values.html",
    "systems/InsMv4/templates/actor/parts/actor-talents.html",
    "systems/InsMv4/templates/actor/parts/actor-powers.html",
    "systems/InsMv4/templates/actor/parts/actor-spells.html",
    "systems/InsMv4/templates/actor/parts/actor-effects.html",
  ]);
};
