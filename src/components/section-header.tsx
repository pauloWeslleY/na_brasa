interface SectionHeaderProps {
  iconClassName: string;
  title: string;
}

const SectionHeader = ({ iconClassName, title }: SectionHeaderProps) => {
  return (
    <div className="section__wrapper_header">
      <i className={iconClassName} />
      <h1>{title}</h1>
    </div>
  );
};

export default SectionHeader;
