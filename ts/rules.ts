export const required = (v: string | null) => {
    return !!v || 'To pole jest wymagane'
}

export const positiveNumber = (v: string | null) => {
    return Number(v) >= 0 || 'Liczba musi być dodatnia'
}