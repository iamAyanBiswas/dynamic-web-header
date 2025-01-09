function dynamicWebHeaders() {
  return {
    title: (title: string = ""):void => {
      (document as Document).title = title
    },
    icon: (refLink:string):void => {
      if(!refLink) throw new Error('refLink can not be empty')
      if(typeof(refLink)==="string") throw new Error('refLink should be string')
      let link = (document as Document).querySelector("link[rel*='icon']") as HTMLLinkElement || (document as Document).createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'icon';
      link.href = refLink;
      document.head.appendChild(link);
    }
  }
}

export default dynamicWebHeaders