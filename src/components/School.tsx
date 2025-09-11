import { Award, Settings } from "lucide-react";
import { useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useSchoolModal } from "../contexts/SchoolContext";
import { useToast } from "../contexts/ToastContext";
import { type SchoolData, translateRole } from "../types/SchoolData";

type SchoolProps = {
  school: SchoolData;
  multiple: boolean;
};

/** The School component with redirect to local dashboard */
const School = ({ school, multiple }: SchoolProps) => {
  const schoolModal = useSchoolModal();
  const auth = useAuth();
  const toast = useToast();

  const copyCertificateCode = useCallback(() => {
    navigator.clipboard
      .writeText(
        `<a href="https://classinsights.at?sid=${school.SchoolId}" target="_blank" rel="noopener noreferrer"><img src="https://classinsights.at/certificate.svg" alt="ClassInsights Zertifikat von ${school.Name} auf classinsights.at anzeigen" width="75" height="75"></a>`,
      )
      .then(() => toast.showMessage("Zertifikat HTML Code kopiert"))
      .catch(() => toast.showMessage("Kopieren fehlgeschlagen!", "error"));
  }, [toast.showMessage, school.SchoolId, school.Name]);

  const editSchool = useCallback(() => schoolModal.show(school), [school, schoolModal]);

  return (
    <div
      className={`w-full ${multiple ? "school" : "rounded-md border-2 border-[#F1F4FF] px-4 py-2 lg:px-8 lg:py-4"}`}
    >
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-2xl">{school.Name}</h2>
        {(school.Roles.includes("Admin") || school.Roles.includes("Owner")) && (
          <div className="mt-[0.2rem] flex gap-2">
            <Award
              onClick={() => copyCertificateCode()}
              onKeyDown={() => copyCertificateCode()}
              width={25}
              height={25}
              className="shrink-0 cursor-pointer"
            />
            <Settings
              onClick={editSchool}
              onKeyDown={editSchool}
              width={25}
              height={25}
              className="shrink-0 cursor-pointer"
            />
          </div>
        )}
      </div>
      <p>
        {school.Roles.length === 1 ? "Rolle" : "Rollen"}:{" "}
        {school.Roles.map((role) => translateRole(role)).join(", ")}
      </p>
      <div
        className="mt-3 flex cursor-pointer items-center gap-1.5 text-primary"
        onClick={() => auth.navigateToDashboard(school.SchoolId)}
        onKeyDown={() => auth.navigateToDashboard(school.SchoolId)}
      >
        <p>Zum Dashboard</p>
        <Award className="shrink-" />
      </div>
    </div>
  );
};

export default School;
