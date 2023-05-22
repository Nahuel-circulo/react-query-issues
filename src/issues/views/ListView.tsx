import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../../hooks/useIssues';
import LoadingIcon from '../../shared/components/LoadingIcon';


export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])

  const onLabelChange = (labelName: string) => {
    console.log(labelName);
    if (selectedLabels.includes(labelName)) {
      console.log('quita');
      setSelectedLabels(selectedLabels.filter(label => label !== labelName))
    } else {
      console.log('agerga');
      setSelectedLabels([...selectedLabels, labelName])
    }
    console.log('selectedLabels ', selectedLabels);
  }


  const { issuesQuery } = useIssues()


  return (
    <div className="row mt-5">

      <div className="col-8">
        {
          issuesQuery.isLoading
            ? <LoadingIcon />
            : <IssueList issues={issuesQuery.data || []} />
        }
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName) => onLabelChange(labelName)} />
      </div>
    </div>
  )
}
