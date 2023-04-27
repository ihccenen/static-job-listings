import Image from 'next/image';
import Link from 'next/link';
import styles from './Job.module.css';

type JobProps = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export default function Job({
  job,
  handleClick,
}: {
  job: JobProps;
  handleClick: (tag: string) => void;
}) {
  return (
    <div className={styles.job}>
      <Image
        className={styles.logo}
        src={job.logo.replace(/\.\/images/, '')}
        width={88}
        height={88}
        quality={100}
        alt=""
      />
      <div className={styles.details}>
        <div className={styles['company-wrapper']}>
          <h2 className={styles.company}>{job.company}</h2>
          {job.new && <p className={styles.new}>NEW!</p>}
          {job.featured && <p className={styles.featured}>FEATURED</p>}
        </div>
        <h3 className={styles.position}>
          <Link href="/">{job.position}</Link>
        </h3>
        <div className={styles.info}>
          <p>{job.postedAt}</p>
          <p>•</p>
          <p>{job.contract}</p>
          <p>•</p>
          <p>{job.location}</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <button
          type="button"
          className={styles.tag}
          onClick={() => handleClick(job.role)}
        >
          {job.role}
        </button>
        <button
          type="button"
          className={styles.tag}
          onClick={() => handleClick(job.level)}
        >
          {job.level}
        </button>
        {job.languages.map((lang) => (
          <button
            type="button"
            className={styles.tag}
            key={lang}
            onClick={() => handleClick(lang)}
          >
            {lang}
          </button>
        ))}
        {job.tools.map((tool) => (
          <button
            type="button"
            className={styles.tag}
            key={tool}
            onClick={() => handleClick(tool)}
          >
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
}
