export default function Footer() {
  const date = new Date().getDate();

  return (
    <footer className="footer">
      <small>&copy; Copyright by IK. All rights reserved.</small>
      <small>
        Last checked limits: {date} {date > 1 ? 'days' : 'day'} ago
      </small>
    </footer>
  );
}
