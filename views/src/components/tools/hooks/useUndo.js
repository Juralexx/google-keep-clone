import React from "react";

export default function useUndo(init, setState) {
    const [history, setHistory] = React.useState([init])
    const [index, setIndex] = React.useState(0)
    const state = React.useMemo(() => history[index], [history, index])

    const handleChange = (value) => {
        if (state === value) return

        const copy = history.slice(0, index + 1) // This removes all future (redo) states after current index
        copy.push(value)
        setHistory(copy)
        setIndex(copy.length - 1)
        setState(prev => ({ ...prev, text: value }))
    }

    const resetState = (init) => {
        setIndex(0)
        setHistory([init])
        setState(prev => ({ ...prev, text: '' }))
    }

    const undo = (steps = 1) => {
        let i = Math.max(0, Number(index) - (Number(steps) || 1))
        setIndex(i)
        setState(prev => ({ ...prev, text: history[i] }))
    }

    const redo = (steps = 1) => {
        let i = Math.min(history.length - 1, Number(index) + (Number(steps) || 1))
        setIndex(i)
        setState(prev => ({ ...prev, text: history[i] }))
    }

    const lastIndex = history.length - 1
    const canUndo = index > 0;
    const canRedo = index < lastIndex;

    return {
        state,
        handleChange,
        resetState,
        index,
        lastIndex,
        undo,
        redo,
        canUndo,
        canRedo
    }
}