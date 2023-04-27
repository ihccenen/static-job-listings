import Image from 'next/image';
import styles from './Filter.module.css';

export default function Filter({
  tags,
  handleRemoveClick,
  handleClearClick,
}: {
  tags: string[];
  handleRemoveClick: (tag: string) => void;
  handleClearClick: () => void;
}) {
  return (
    <div className={styles.filter}>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <div className={styles.wrapper} key={tag}>
            <p className={styles.tag}>{tag}</p>
            <button
              className={styles.remove}
              type="button"
              aria-label="remove tag"
              onClick={() => handleRemoveClick(tag)}
            >
              <Image
                src="/icon-remove.svg"
                width={14}
                height={14}
                quality={100}
                alt=""
              />
            </button>
          </div>
        ))}
      </div>
      <button className={styles.clear} type="button" onClick={handleClearClick}>
        Clear
      </button>
    </div>
  );
}
