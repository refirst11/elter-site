'use client';

import React, { ReactNode, useState } from 'react';
import { styles } from './style.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCopy } from 'react-icons/fi';

type TabsProps = {
  children: ReactNode;
  items?: string[];
};

export const Tabs = ({ items, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setCopied(false);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTextFromChildren = (children: ReactNode): string => {
    let text = '';
    React.Children.forEach(children, (child) => {
      if (typeof child === 'string') {
        text += child;
      } else if (React.isValidElement(child)) {
        text += getTextFromChildren(child.props.children);
      }
    });
    return text;
  };

  const codeToCopy = getTextFromChildren(React.Children.toArray(children)[activeTab]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {items?.map((item, index) => (
          <button
            style={{
              borderBottom: activeTab === index ? 'solid 2px lightblue' : 'white',
              color: activeTab === index ? 'skyblue' : 'black',
            }}
            className={styles.button_initialize}
            key={index}
            onClick={() => handleTabClick(index)}
          >
            {item}
          </button>
        ))}
        <CopyToClipboard text={codeToCopy} onCopy={handleCopy}>
          <button
            onMouseEnter={() => setVisible(true)}
            className={`${copied ? styles.noactive + ' ' + styles.copyButton : styles.active + ' ' + styles.copyButton} ${
              visible ? styles.visible : styles.hidden
            }`}
          >
            <div className={styles.icon_position}>
              <FiCopy size={16} color={copied ? '#333' : 'gray'} className={copied ? styles.noactive : styles.active} />
            </div>
          </button>
        </CopyToClipboard>
      </div>
      <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} className={styles.code_box}>
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

export const Tab = ({ children }: { children: ReactNode }) => <>{children}</>;
