import { useRouter } from "next/router";

export default function UserInfo() {
  let router = useRouter();
  const handleForm = () => {
    const schoolname = document.getElementById("schoolname");
    const examname = document.getElementById("examname");
    const classname = document.getElementById("class");
    const subjectname = document.getElementById("subject");
    const isHindi = document.getElementById("language");

    const list = [
      schoolname.value,
      examname.value,
      classname.value,
      subjectname.value,
    ];
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === "") return alert("Please fill the form!");
    }
    if (isHindi.checked)
      return router.push({ pathname: "/paperhindi", query: { params: list } });
    return router.push({ pathname: "/paper", query: { params: list } });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="text-5xl font-black text-center p-4 select-none leading-normal mt-8">
          Enter Your Information
        </p>
        <label
          for="schoolname"
          className="text-xl text-center select-none leading-normal p-2"
        >
          School Name:{" "}
        </label>
        <input
          type="text"
          id="schoolname"
          name="schoolname"
          className="border-2 border-blue-800 w-3/4 max-w-xl text-center p-2"
          placeholder="School's Name"
          spellCheck="false"
          autoComplete="false"
        />
        <label
          for="examname"
          className="text-xl text-center select-none leading-normal p-2"
        >
          Exam Name:{" "}
        </label>
        <input
          type="text"
          id="examname"
          name="examname"
          className="border-2 border-blue-800 w-3/4 max-w-xl text-center p-2"
          placeholder="e.g. Half Yearly Exam"
          spellCheck="false"
          autoComplete="false"
        />
        <label
          for="class"
          className="text-xl text-center select-none leading-normal p-2"
        >
          Class Number:{" "}
        </label>
        <input
          type="text"
          id="class"
          name="class"
          className="border-2 border-blue-800 w-3/4 max-w-xl text-center p-2"
          placeholder="e.g. Class 2"
          spellCheck="false"
          autoComplete="false"
        />
        <label
          for="subject"
          className="text-xl text-center select-none leading-normal p-2"
        >
          Subject:{" "}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="border-2 border-blue-800 w-3/4 max-w-xl text-center p-2"
          placeholder="Enter Subject Name..."
          spellCheck="false"
          autoComplete="false"
        />
        <div className="w-3/4 max-w-xl text-center mt-8 mb-8 flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full h-full"
            onClick={handleForm}
          >
            Proceed
          </button>
          <div className="mt-2">
            <input
              type="checkbox"
              id="language"
              name="language"
              value="Hindi"
            />
            <label for="language" className="px-2">
              Check this box if Paper is in Hindi
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
