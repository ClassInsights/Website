import { X } from "lucide-react";
import { useMemo } from "react";
import { useSchoolModal } from "../contexts/SchoolContext";
import Button from "./Button";
import MultipleSelect from "./GroupSelect";
import TextInput from "./TextInput";

/** Modal to edit the school */
const EditSchool = () => {
  const schoolModal = useSchoolModal();

  const data = useMemo(() => schoolModal.getData(), [schoolModal]);
  const azureGroups = useMemo(() => schoolModal.azureGroups, [schoolModal]);

  if (!schoolModal.isVisible || !data || !azureGroups) return null;

  return (
    <dialog className="fixed top-0 z-20 flex h-dvh w-screen items-end justify-center bg-transparent md:items-center">
      <div
        className="h-full w-full cursor-pointer bg-black opacity-30"
        onClick={schoolModal.hide}
        onKeyDown={schoolModal.hide}
      />
      <div className="absolute h-[88%] max-h-[88%] w-full overflow-hidden rounded-t-2xl bg-background p-4 pb-2 md:w-10/12 md:rounded-2xl lg:w-4/6 xl:w-1/2 2xl:w-2/5">
        {/* Title Bar */}
        <div className="flex items-start justify-between bg-background pb-2">
          <X className="shrink-0 opacity-0" />
          <div className="flex items-center gap-2 select-none">
            <p className="font-bold">{data.name}</p>
          </div>
          <X className="shrink-0 cursor-pointer" onClick={schoolModal.hide} />
        </div>
        {/* Certificate Content */}
        <div className="scrollbar h-full overflow-y-scroll px-6 pt-8">
          <h3 className="pb-1">Lokale API URL</h3>
          <p>
            Hier können Sie die URL der lokalen ClassInsights API bearbeiten. Diese ist wichtig, da
            sie die Schnittstelle zu unserem Server darstellt und muss mit jener aus der
            Gruppenrichtlinie übereinstimmen.
          </p>
          <TextInput
            id="api"
            label="API URL"
            initialValue={data.local_api_url}
            onChange={(value) => schoolModal.updateData({ ...data, local_api_url: value })}
          />
          <h3 className="mt-8 pb-1">Lokale Dashboard URL</h3>
          <p>Zu dieser URL werden Sie mit einem Klick auf "Zum Dashboard" weitergeleitet.</p>
          <TextInput
            id="dashboard"
            label="Dashboard URL"
            initialValue={data.local_dashboard_url}
            onChange={(value) => schoolModal.updateData({ ...data, local_dashboard_url: value })}
          />
          <h3 className="mt-8 pb-1">Azure Lehrer Gruppe</h3>
          <p>Folgende Azure Gruppen haben Zugriff auf das lokale ClassInsights Dashboard.</p>
          <MultipleSelect
            label="Berechtigte Gruppen"
            initialSelection={data.azure_teacher_groups}
            options={azureGroups}
            onChange={(options) =>
              schoolModal.updateData({ ...data, azure_teacher_groups: options })
            }
          />
          <h3 className="mt-8 pb-1">Schulwebsite</h3>
          <p>Die vollständige URL der schuleigenen Website.</p>
          <TextInput
            id="website"
            label="Website URL"
            initialValue={data.website}
            onChange={(value) => schoolModal.updateData({ ...data, website: value })}
          />
          <div className="mt-8 flex justify-end pb-12">
            <Button
              label="Speichern"
              onPress={() => schoolModal.save()}
              disabled={!schoolModal.hasChanges}
            />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default EditSchool;
