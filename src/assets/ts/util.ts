class Util {

  /**
   * init materializecss components
   */
   public static initializeElem = (eleSelector: string, instanceClass: any, options={}) => {
    const elem = document.querySelector(eleSelector);
    if (eleSelector && instanceClass) {
      return new instanceClass(elem, options)
    }
  };

}

export const initializeElem = Util.initializeElem;