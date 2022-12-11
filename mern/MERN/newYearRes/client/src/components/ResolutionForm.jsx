import { useState } from "react"

const ResolutionForm = ({submitProp,initName,initCat,initDesc,initRew,initLikes,errors}) => {
    const [name,setName] = useState(initName)
    const [category,setCategory] = useState(initCat)
    const [description,setDescription] = useState(initDesc)
    const [reward1,setReward1] = useState(initRew[0])
    const [reward2,setReward2] = useState(initRew[1])
    const [reward3,setReward3] = useState(initRew[2])

    const handleSubmit = e => {
        e.preventDefault()
        submitProp({
            name,
            category,
            description,
            rewards: [
                reward1,reward2,reward3
            ],
            likes: initLikes
        })
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <p>
                <label>
                    Resolution:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
            </p>
            {errors.name && <p className="error">{errors.name.message}</p>}
            <p>
                <label>
                    Category:
                    <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
                </label>
            </p>
            {errors.category && <p className="error">{errors.category.message}</p>}
            <p>
                <label>
                    Description:
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                </label>
            </p>
            {errors.description && <p className="error">{errors.description.message}</p>}
            <p>
                <label>
                    Rewward 1:
                    <input type="text" value={reward1} onChange={e => setReward1(e.target.value)} />
                </label>
            </p>
            <p>
                <label>
                    Rewward 2:
                    <input type="text" value={reward2} onChange={e => setReward2(e.target.value)} />
                </label>
            </p>
            <p>
                <label>
                    Rewward 3:
                    <input type="text" value={reward3} onChange={e => setReward3(e.target.value)} />
                </label>
            </p>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default ResolutionForm