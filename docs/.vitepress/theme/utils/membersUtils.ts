export function getMember(members, id) {
    const member = members.find(x => x.id === id);
    return member;
}

export function getMemberAvatar(members, id) {
    const member = members.find(x => x.id === id);
    return member?.avatar ?? "https://via.placeholder.com/150";
}

export function getInternalMembers(members) {
    const internalMembers = members.filter(x => x.internal === true);
    return internalMembers;
}