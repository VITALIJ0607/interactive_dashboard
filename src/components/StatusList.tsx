interface Props {
    activeCells: string[];
}

const StatusList = ({ activeCells}: Props) => {
  return (
    <div>
        <h3>Aktivierte Zellen</h3>
        <ul>
            {activeCells.map(cell => <li key={cell}>{cell}</li>)}
        </ul>
    </div>
  )
}

export default StatusList;