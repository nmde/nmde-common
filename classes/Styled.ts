import CSS from 'csstype';
import { createRenderer } from 'fela';
import { render } from 'fela-dom';
import important from 'fela-plugin-important';
import Vue from 'vue';

export type StyleRecord<T extends string> = Record<T, CSS.Properties>;

const renderer = createRenderer({
  plugins: [important()],
});

/**
 * Utility class for applying custom CSS to components with strict typing
 * Type parameter T is a type containing the names of all classes the component uses
 */
export default class Styled<T extends string> extends Vue {
  /**
   * Stores the associations between T and compiled class names
   */
  private classes: Record<string, string> = {};

  /**
   * Renders the custom styles for the component
   *
   * @param {StyleRecord} css The custom component styles
   */
  public constructor(css: StyleRecord<T>) {
    super();
    // Create style rules
    Object.keys(css).forEach((key) => {
      const cname = key as T;
      this.classes[cname] = renderer.renderRule((props) => props, css[cname]);
    });
    // Render to DOM
    render(renderer);
  }

  /**
   * Retrieves the compiled CSS class name corresponding to a class name defined in T
   *
   * @param {string} name The class name as defined in T
   * @returns {string} The compiled class name
   */
  protected className(name: T): string {
    return this.classes[name];
  }
}
