import AssignLabels from "./AssignLabels";
import RemoveLabels from "./RemoveLabels";

export default function Image({ id, image, labels }) {

  return (
    <div className="bg-blue-100 rounded-md flex flex-col justify-between">
      <img
        src={image.name}
        alt="img"
        className="object-contain rounded-md"
      ></img>

      <div className="">
        <div className="p-2 flex flex-row overflow-auto space-x-3 items-center">
          <h1 className="text-sm font-semibold bg-slate-300 rounded-md p-1">
            Labels:
          </h1>
          {image.labels.map((label, index) => (
            <div
              key={index}
              className="whitespace-nowrap bg-slate-100 rounded-md p-1 text-sm"
            >
              {label}
            </div>
          ))}
        </div>

        <AssignLabels id={id} labels={labels} />

        <RemoveLabels id={id} labels={image.labels} />
      </div>
    </div>
  );
}
