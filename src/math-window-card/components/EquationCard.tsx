type EquationCardProps = {
  numerator: number;
  denominator: number;
  operator: string;
};

const EquationCard = ({
  numerator,
  denominator,
  operator,
}: EquationCardProps) => {
  return (
    <div className="equation">
      <div className="numerator">{numerator}</div>
      <div className="operator">{operator}</div>
      <div className="denominator">{denominator}</div>
      <div className="answer-box">&nbsp;</div>
    </div>
  );
};

export default EquationCard;
