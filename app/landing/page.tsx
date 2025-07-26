'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Landing Pages</h1>
      <div style={styles.buttonGroup}>
        <Link href="/landing/page-1" style={{ ...styles.button, background: '#4f46e5' }}>
          Go to Page 1
        </Link>
        <Link href="/landing/page-2" style={{ ...styles.button, background: '#059669' }}>
          Go to Page 2
        </Link>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '100vh',
    background: 'linear-gradient(to right, #fdfbfb, #ebedee)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    fontFamily: `'Segoe UI', sans-serif`,
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 700,
    color: '#111827',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1.5rem',
  },
  button: {
    padding: '1rem 2rem',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.25rem',
    fontWeight: 600,
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
  },
};
