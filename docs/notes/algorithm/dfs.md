# DFS (Depth-First Search)

## 📘 개념
- 루트 노드에서 시작하여 **한 방향으로 계속 탐색**하다가 더 이상 갈 수 없으면 **되돌아가는 방식**.
- **스택(stack)** 또는 **재귀 호출**을 사용.

## 🧠 특징
- 깊이 우선: 한 경로를 끝까지 탐색
- 백트래킹 문제에서 자주 사용
- 재귀로 구현이 간단
- 사이클 방지용 방문 체크 필요

## ✅ 사용 예시
- 미로 찾기 (모든 경로 탐색)
- 순열, 조합
- 그래프 연결 요소 개수

## 🧩 기본 구현 (2차원 배열 기준, row/col)
```java
boolean[][] visited;
int[][] directions = {{-1,0}, {1,0}, {0,-1}, {0,1}}; // 상하좌우

void dfs(int row, int col, boolean[][] visited, int[][] map) {
    visited[row][col] = true;
    
    for (int[] dir : directions) {
        int nextRow = row + dir[0];
        int nextCol = col + dir[1];

        if (isInBounds(nextRow, nextCol, map) && !visited[nextRow][nextCol] && map[nextRow][nextCol] == 1) {
            dfs(nextRow, nextCol, visited, map);
        }
    }
}

boolean isInBounds(int row, int col, int[][] map) {
    return row >= 0 && row < map.length && col >= 0 && col < map[0].length;
}

