interface Props {
  activeCells: Set<string>;
}

const StatusList = ({ activeCells }: Props) => {
  const sortActiveCells = () => {
    return Array.from(activeCells).sort((current: string, next: string) => {
      const [currentX, currentY] = current.split(",");
      const [nextX, nextY] = next.split(",");
      if (currentX > nextX) return 1;
      if (currentX === nextX) return currentY > nextY ? 1 : -1;
      return -1;
    });
  };

  const sortedActiveCells: string[] = sortActiveCells();

  return (
    <div>
      <h3>Aktivierte Zellen</h3>
      <ul>
        {sortedActiveCells.map((cell) => (
          <li key={cell}>Zelle({cell})</li>
        ))}
      </ul>
    </div>
  );
};

export default StatusList;
