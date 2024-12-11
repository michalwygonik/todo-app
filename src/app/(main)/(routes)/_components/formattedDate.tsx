const FormattedDate = ({ timestamp }: { timestamp: number }) => {
  const userLocale = navigator.language;
  const formattedDate = new Date(timestamp).toLocaleDateString(userLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return <span className="text-xs">{formattedDate}</span>;
};

export default FormattedDate;
