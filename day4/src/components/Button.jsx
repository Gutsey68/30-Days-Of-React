export default function Button({ children }) {
  return (
    <button
      style={{
        backgroundColor: '#F37474',
        border: '1px solid #F37474',
        borderRadius: '6px',
        padding: '0.5rem 1.5rem ',
        fontSize: '1rem',
        fontWeight: '500',
        color: 'white',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
}
