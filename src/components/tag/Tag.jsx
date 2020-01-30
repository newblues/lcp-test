import React, { useState } from 'react';

import css from './Tag.module.scss';

import Input from '../input/input';

import { ReactComponent as Logo } from './close.svg';

const Tag = ({ placeholder }) => {
  const [tags, setTags] = useState([]);
  const [select, setSelect] = useState(false);

  const onTagAdded = tag => {
    const newTags = [...tags, tag];
    setTags(newTags);
  };

  const onTagDeleted = tag => {
    const deleteTag = tags.filter(item => item !== tag);
    setTags(deleteTag);
  };

  const selectTag = () => {
    const deleteLastTag = tags.slice(0, tags.length - 1);
    setTags(deleteLastTag);
  };

  const renderTag = () => {
    return tags.map((tag, index) => (
      <div key={index} className={`${css.tagItem}`}>
        {tag}
        <Logo className={css.logo} onClick={() => onTagDeleted(tag)} />
      </div>
    ));
  };

  return (
    <div className={css.container}>
      <div className={css.tagContainer}>{renderTag()}</div>
      <Input
        placeholder={placeholder}
        onTagAdded={tag => onTagAdded(tag)}
        onChange={value => console.log(value)}
        selectTag={tag => selectTag(tag)}
      />
    </div>
  );
};

export default Tag;
