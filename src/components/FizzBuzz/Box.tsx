export default function Box({ element }: { element: string | number }) {
  return (
    <p className={typeof element === "string" ? `${element}Box` : ""}>
      {element}
    </p>
  );
}
