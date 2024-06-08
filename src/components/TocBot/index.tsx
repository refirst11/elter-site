'use client';

import { useEffect } from 'react';
import tocbot from 'tocbot';

export const TocBot = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: 'body',
      headingSelector: 'h2, h3',
      headingsOffset: 220,
      scrollSmoothOffset: -70,
      orderedList: false,
    });

    return () => tocbot.destroy();
  }, []);

  return <nav className="toc" />;
};
