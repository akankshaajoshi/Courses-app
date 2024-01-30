type BadgeProps = {
  data: number;
};

const index = ({ data }: BadgeProps) => {
  const status = data % 3;
  const courseStatus = (() => {
    switch (status) {
      case 0:
        return <span className="font-bold  rounded-[5px] bg-green p-2">Open</span>;
      case 1:
        return <span className="font-bold rounded-[5px] bg-red p-2">Closed</span>;
      case 2:
        return <span className="font-bold rounded-[5px] bg-blue p-2">In progress</span>;
      default:
        return <span className="font-bold rounded-[5px] p-2">Upcoming</span>;
    }
  })();

  return courseStatus;
};

export default index;
