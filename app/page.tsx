'use client';

import { useState } from 'react';
import Image from 'next/image';
import Job from './components/Job';
import Filter from './components/Filter';
import styles from './page.module.css';
import jobs from '@/jobs/data.json';

export default function Home() {
  const [filter, setFilter] = useState<string[]>([]);

  const handleAddTagClick = (tag: string) => {
    setFilter((prev) => (!prev.includes(tag) ? prev.concat(tag) : prev));
  };

  const handleRemoveTagClick = (tag: string) => {
    setFilter((prev) => prev.filter((curr) => tag !== curr));
  };

  const handleClearTagClick = () => {
    setFilter([]);
  };

  const filteredJobs = filter.length > 0 ? jobs.filter((job) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];

    for (let i = 0; i < filter.length; i += 1) {
      if (!tags.includes(filter[i])) return false;
    }

    return true;
  }) : jobs;

  return (
    <main className={styles.main}>
      <picture className={styles.picture}>
        <source
          srcSet="/bg-header-desktop.svg"
          media="(min-width: 600px)"
          width={1440}
          height={156}
        />
        <Image
          src="/bg-header-mobile.svg"
          width={375}
          height={156}
          quality={100}
          alt=""
        />
      </picture>
      <div className={styles.wrapper}>
        {filter.length > 0 && (
          <Filter
            tags={filter}
            handleRemoveClick={handleRemoveTagClick}
            handleClearClick={handleClearTagClick}
          />
        )}
        <div className={styles.jobs}>
          {filteredJobs.map((job) => (
            <Job key={job.company} job={job} handleClick={handleAddTagClick} />
          ))}
        </div>
      </div>
    </main>
  );
}
